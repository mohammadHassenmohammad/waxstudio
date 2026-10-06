import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { processAppointmentRequest } from './server/mailer.js';

// Custom Vite plugin to handle booking API requests in development
function bookingApiPlugin() {
  return {
    name: 'booking-api-plugin',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === '/api/book' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => {
            body += chunk.toString();
          });
          req.on('end', async () => {
            try {
              const data = JSON.parse(body || '{}');
              const result = await processAppointmentRequest(data);
              res.setHeader('Content-Type', 'application/json');
              if (!result.success) {
                res.statusCode = 400;
                res.end(JSON.stringify(result));
              } else {
                res.statusCode = 200;
                res.end(JSON.stringify(result));
              }
            } catch (err) {
              console.error('API middleware error:', err);
              res.setHeader('Content-Type', 'application/json');
              res.statusCode = 500;
              res.end(JSON.stringify({ success: false, error: 'Internal server error' }));
            }
          });
          return;
        }
        next();
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), bookingApiPlugin()],
  server: {
    port: 3000,
    open: false,
    host: true
  }
});
