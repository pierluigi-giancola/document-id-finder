// content.js

if (!window.hashtagFinder) {
    // Initialize the extension    
    document.addEventListener('keydown', (e) => {
        const isAltShiftE = e.altKey && e.shiftKey && e.key === 'E'
        if (isAltShiftE) {
            if (!window.hashtagFinder.active) {
                window.hashtagFinder.active = true;
                const searchedElement = [
                    'h1',
                    'h2',
                    'h3',
                    'h4',
                    'h5',
                    'h6',
                    'p',
                    'span',
                    'div',
                    'ul',
                    'ol',
                ]
                const query = searchedElement.map(element => `${element}[id]`).join(', ');
                document.body.querySelectorAll(searchedElement).forEach((h) => {
                    if (h.id) {
                        console.log('h', h)
                        const hash = h.id;
                        const hashLink = document.createElement('a');
                        hashLink.className = 'hashtag-finder-hash-link-element';
                        hashLink.href = `#${hash}`;
                        hashLink.innerText = '#';
                        h.prepend(hashLink);
                    }
                });
            } else {
                window.hashtagFinder.active = false;
                document.querySelectorAll('.hashtag-finder-hash-link-element').forEach((h) => {
                    h.remove();
                }
                );
            }
        }
    }
    );
}


window.hashtagFinder = window.hashtagFinder ?? {};

window.hashtagFinder.loaded = true;

window.hashtagFinder.active = false;
