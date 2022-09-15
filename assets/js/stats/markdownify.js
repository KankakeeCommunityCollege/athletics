function replaceItem(markdown, el, regEx) {
  switch (el) {
    case 'h3':
      return markdown.replace(regEx, '<h3 class="blue-heading mt-4 mb-3">$<text></h3>');
      break;
    case 'p':
      return markdown.replace(regEx, '<p>$<text></p>');
      break;
    case 'li':
      return markdown.replace(regEx, '<li>$<text></li>');
      break;
    case 'ul':
      return markdown.replace(regEx, '<ul>');
      break;
    case '/ul':
      return markdown.replace(regEx, '</ul>');
      break;
  }
}

function testForMarkdown(blurb) {
  let markdown = blurb.toString();
  const strongRegEx = /\*\*(?<text>.+)\*\*/gm;
  const markdownObject = {
    'h3': /^##\s(?<text>.+)/gm,
    'p': /^(?<text>[^-{<#>\s].+)/gm,
    'li': /^-\s(?<text>.+)/gm,
    'ul': /{:list}/gm,
    '/ul': /{:!list}/gm
  };
  for (let key in markdownObject) {
    markdown = replaceItem(markdown, key, markdownObject[key]);
  }

  markdown = markdown.replace(strongRegEx, '<strong>$<text></strong>');

  [/^<<<.*|^>>>.*/gm, /^$/gm].forEach(pattern => markdown = markdown.replace(pattern, ''));

  return markdown;
}

export default testForMarkdown;
