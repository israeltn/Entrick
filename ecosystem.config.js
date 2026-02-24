module.exports = {
    apps: [
        {
            name: 'entricksystems',
            script: 'server.js',
            cwd: '/home/entricksystems/htdocs/entricksystems.com/.next/standalone',
            instances: 'max',
            exec_mode: 'cluster',
            env: {
                NODE_ENV: 'production',
                PORT: 3000,
                HOSTNAME: '127.0.0.1'
            }
        }
    ]
};
