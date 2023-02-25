from http.server import BaseHTTPRequestHandler

class handler(BaseHTTPRequestHandler):
    def doGet(self):
        self.send_response(200)
        self.send_header('Content-type', 'text/plain')
        self.end_headers()
        self.wfile.write('api by python'.encode())
        return 
