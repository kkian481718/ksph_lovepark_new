const fs = require('fs');
let lines = fs.readFileSync('../index.html', 'utf8').split('\n');
let template = '<template>\n' + lines.slice(182, 506).join('\n') + '\n' + lines.slice(581, 999).join('\n') + '\n</template>';
template = template.replace(/src=\"assets\//g, 'src=\"/assets/');
fs.writeFileSync('src/components/Courses.vue', template, 'utf8');
console.log('Courses.vue generated successfully.');
