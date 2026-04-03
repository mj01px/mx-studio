const ffmpeg = require('ffmpeg-static');
const { execSync } = require('child_process');
const path = require('path');

console.log('Using ffmpeg at:', ffmpeg);
const input = path.join(__dirname, 'public', 'video_teclado.mp4');
const output = path.join(__dirname, 'public', 'video_kf.mp4');

try {
  console.log('Starting GIF to MP4 conversion...');
  // Force pix_fmt yuv420p for h264 compatibility, ensure even dimensions, and force keyframes for scrubbing
  const cmd = `"${ffmpeg}" -y -i "${input}" -movflags faststart -vf "scale=trunc(iw/2)*2:trunc(ih/2)*2" -pix_fmt yuv420p -vcodec libx264 -crf 10 -preset veryslow -g 1 -an "${output}"`;
  execSync(cmd, { stdio: 'inherit' });
  console.log('Conversion successful! Wrote to:', output);
} catch (e) {
  console.error('Failed to convert', e);
}
