/*
 * 读取指定目录下的所有 .html 文件，并在 body 标签结束符前添加 script 标签
 * 用法示例： node add-commonjs-for-html.js </path/to/dir>
 */

import fs from'node:fs';
import path from'node:path';
import { color } from'console-log-colors';

const config = {
  baseDir: process.argv[2] || path.resolve(__dirname, '../docs'),
  js: `<script src="https://lzw.me/x/lib/utils/h5-common.js?v=016"></script>`,
  replacejs: /<script src="https:\/\/lzw.me\/x\/lib\/utils\/h5-common.js?v=\d+"><\/script>/,
  filterkey: 'lib/utils/h5-common.js',
  stats: {
    files: 0,
    updated: 0,
  },
  onUpdateFile: null as unknown as ((data: string, filepath: string) => string),
};

function updateDirHtml(dir: string) {
  if (!fs.existsSync(dir)) {
    console.error('目录不存在！', dir);
    return;
  }

  // 读取指定目录下的所有文件和子目录
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  entries.forEach(entry => {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      updateDirHtml(fullPath);
    } else if (entry.isFile() && ['.htm', '.html'].includes(path.extname(entry.name))) {
      processHtmlFile(fullPath);
    }
  });
}

function processHtmlFile(filePath: string) {
  let data = fs.readFileSync(filePath, 'utf8');
  let isUpdated = false;

  config.stats.files++;

  if (!data.includes(config.js)) {
    if (config.replacejs.test(data)) {
      data = data.replace(config.replacejs, config.js);
    } else if (data.includes(config.filterkey)) {
      return;
    } else if (data.includes('</body>')) {
      data = data.replace('</body>', `${config.js}</body>`);
    } else if (data.includes('</BODY>')) {
      data = data.replace('</BODY>', `${config.js}</BODY>`);
    } else {
      console.warn(` >[WARN] No </body> tag found in ${color.gray(filePath)}`);
      isUpdated = false;
    }

    isUpdated = true;
  }

  if (typeof config.onUpdateFile === 'function') {
    const d = config.onUpdateFile(data, filePath);
    if (d && d !== data) {
      data = d;
      isUpdated = true;
    }
  }

  if (isUpdated) {
    // 写入更新后的内容
    fs.writeFileSync(filePath, data, 'utf8');
    config.stats.updated++;
    console.log(`[${config.stats.updated}/${config.stats.files}] Updated ${color.green(filePath)}`);
  }
}

export function updateHtml(dir =  config.baseDir, onUpdateFile = config.onUpdateFile) {
  config.stats.files = 0;
  config.stats.updated = 0;
  config.onUpdateFile = onUpdateFile;

  updateDirHtml(dir);
}

if ((module === require.main)) updateHtml();
