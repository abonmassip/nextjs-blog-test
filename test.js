const path = require('path');
const fs = require('fs');
const matter = require('gray-matter');

const postsDirectory = path.join(process.cwd(), 'posts');
const fileNames = fs.readdirSync(postsDirectory);
console.log('file names: ', fileNames);

const allPostsData = fileNames.map(fileName => {
  const id = fileName.replace(/\.md$/, '')
  console.log('id: ', id);
  const fullPath = path.join(postsDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);
  console.log('path: ', fullPath);
  console.log('date: ', matterResult.data.date);
  console.log('title: ', matterResult.data.title);
  console.log('matter result: ', matterResult);
})