# web-segment
Port of leizongmin's node-segment module for web

### Usage

```javascript
var text = '这是一个基于Node.js的中文分词模块。';
var result = segment.doSegment(text, {
  simple: true
});
console.log(result);
```

returns -

```javascript
[ '这是', '一个', '基于', 'Node.js', '的', '中文', '分词', '模块', '。' ]
```


```javascript
var text = '这是一个基于Node.js的中文分词模块。';
var result = segment.doSegment(text, {
  stripPunctuation: true
});
console.log(result);
```

returns -

```javascript
[ { w: '这是', p: 0 },
  { w: '一个', p: 2097152 },
  { w: '基于', p: 262144 },
  { w: 'Node.js', p: 8 },
  { w: '的', p: 8192 },
  { w: '中文', p: 1048576 },
  { w: '分词', p: 4096 },
  { w: '模块', p: 1048576 } ]
```