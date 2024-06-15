import * as fs from 'fs';


function markdownToJson(markdownContent: string) {
    const lines = markdownContent.trim().split('\n');

    const jsonData = {
        "fr": [],
        "en": []
    };

    let section: any = null;

    for (const line of lines) {
        const trimmedLine = line.trim();
        if (!trimmedLine) {
            continue;
        }

        const headerMatch = /^(#+)\s+(.*)/.exec(trimmedLine);
        if (headerMatch) {
            const headerLevel = headerMatch[1].length;
            const headerText = headerMatch[2];

            if (headerLevel === 1) {
                if (section) {
                    jsonData.en.push(section);
                }
                section = {
                    title: headerText,
                    content: []
                };
            } else {
                if (section) {
                    section.content.push({
                        type: `h${headerLevel}`,
                        text: headerText
                    });
                }
            }
        } else {
            if (trimmedLine.startsWith('* ')) {
                if (section) {
                    section.content.push({
                        type: 'li',
                        text: trimmedLine.substring(2)
                    });
                }
            } else {
                if (section) {
                    section.content.push({
                        type: 'p',
                        text: trimmedLine
                    });
                }
            }
        }
    }

    if (section) {
        jsonData.en.push(section);
    }

    return JSON.stringify(jsonData, null, 4);
}

const jsonOutput = markdownToJson(markdownContent);
console.log(jsonOutput);

// Optional: Write the output to a file
fs.writeFileSync('output.json', jsonOutput);
