#!/usr/bin/env python3
"""
Divine Fatherhood Static Server
Serves the Next.js static build from /out directory
"""
import http.server
import socketserver
import os
import sys
from datetime import datetime

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory="/home/user/webapp/out", **kwargs)
    
    def log_message(self, format, *args):
        """Custom logging with timestamps"""
        timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
        message = f"[{timestamp}] {self.address_string()} - {format % args}"
        print(message)
        sys.stdout.flush()

    def end_headers(self):
        """Add CORS headers for development"""
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

if __name__ == "__main__":
    PORT = 8080
    DIRECTORY = "/home/user/webapp/out"
    
    # Verify the directory exists
    if not os.path.exists(DIRECTORY):
        print(f"ERROR: Build directory {DIRECTORY} does not exist!")
        print("Please run 'npm run build' first to generate static files.")
        sys.exit(1)
    
    print(f"🚀 Starting Divine Fatherhood server...")
    print(f"📁 Serving from: {DIRECTORY}")
    print(f"🌐 Port: {PORT}")
    print(f"🔗 Custom domain: www.mrsixpackempire.com")
    print(f"⏰ Started at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    
    try:
        with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
            print(f"✅ Server running on http://0.0.0.0:{PORT}")
            print("🛑 Press Ctrl+C to stop")
            httpd.serve_forever()
    except KeyboardInterrupt:
        print(f"\n🛑 Server stopped at: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    except Exception as e:
        print(f"❌ Server error: {e}")
        sys.exit(1)