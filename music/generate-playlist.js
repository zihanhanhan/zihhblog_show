const fs = require('fs');
const path = require('path');

// 获取音乐文件夹中的所有音乐文件
const musicDir = path.join(__dirname);
const musicFiles = fs.readdirSync(musicDir).filter(file => 
    file.endsWith('.mp3') || 
    file.endsWith('.wav') || 
    file.endsWith('.ogg') || 
    file.endsWith('.m4a')
);

// 创建播放列表
const playlist = musicFiles.map(file => ({
    title: path.parse(file).name,
    url: `/music/${file}`
}));

// 保存播放列表到 JSON 文件
fs.writeFileSync(
    path.join(musicDir, 'playlist.json'),
    JSON.stringify(playlist, null, 2)
);

console.log('播放列表已生成！');
console.log(`共找到 ${playlist.length} 首歌曲：`);
playlist.forEach((track, index) => {
    console.log(`${index + 1}. ${track.title}`);
}); 