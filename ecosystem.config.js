module.exports = {
    apps: [
        {
            name: 'entricksystems',
            script: 'node_modules/next/dist/bin/next',
            args: 'start',
            cwd: '/home/entricksystems/htdocs/entricksystems.com',
            instances: 'max',
            exec_mode: 'cluster',
            env: {
                NODE_ENV: 'production',
                PORT: 3000
            }
        }
    ]
};
