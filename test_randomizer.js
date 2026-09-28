const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');

const html = fs.readFileSync('index.html', 'utf8');
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
const elements = new Map();
function element(id) {
    if (!elements.has(id)) elements.set(id, {
        value: ({inputGlyphs: 'a b c d', inputAltCount: '2', inputSuffix: '.alt', inputBucket: '2', inputDepth: '2', 'viz-input': 'abba'})[id] || '',
        style: {}, dataset: {}, textContent: '', innerHTML: '', classList: {add() {}, remove() {}},
        addEventListener() {}, click() {}
    });
    return elements.get(id);
}
let downloaded;
let clipboardText;
const context = {
    navigator: {clipboard: {writeText: async value => { clipboardText = value; }}},
    document: {
        getElementById: element,
        querySelectorAll: () => [],
        createElement: () => ({click() {}, set href(value) {}, set download(value) { downloaded = value; }}),
        body: {appendChild() {}, removeChild() {}}
    },
    URL: {createObjectURL: blob => { context.blob = blob; return 'blob:test'; }, revokeObjectURL() {}},
    Blob, Math, setTimeout
};
vm.runInNewContext(script, context);
assert.equal(element('filename-display').textContent, 'recipe.txt');
assert.equal(element('glyph-count').textContent, 'Total: 8 glyphs');
context.downloadAll();
assert.equal(downloaded, 'randomizer_calt.fea');
Promise.all([context.blob.text(), context.copyGlyphsCode()]).then(([code]) => {
    assert.match(code, /feature calt \{\s+lookup PseudoRandom;\s+lookup BackwardsCheck;/);
    assert.match(code, /@alt2_1/);
    assert.match(clipboardText, /lookup PseudoRandom/);
    assert.doesNotMatch(clipboardText, /feature calt \{/);
    element('inputGlyphs').value = '';
    context.update();
    assert.equal(element('copy-glyphs-code').disabled, true);
    assert.equal(element('download-all').disabled, true);
    assert.match(element('input-status').textContent, /Masukkan minimal satu nama glyph/);
    console.log('Randomizer flow and download OK');
});
