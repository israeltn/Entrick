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
                PORT: 3001,
                HOSTNAME: '127.0.0.1'
            },
            error_file: 'logs/err.log',
            out_file: 'logs/out.log',
            log_date_format: 'YYYY-MM-DD HH:mm:ss'
        }
    ]
};
