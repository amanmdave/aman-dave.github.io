const ghpages = require('gh-pages')

// replace with your repo url
ghpages.publish(
    'private',
    {
        branch: 'master',
        repo: 'https://github.com/wizArD-1910/wizArD-1910.github.io',
    },
    () => {
        console.log('Deploy Complete!')
    }
)
