from flask import Flask, request, Response
import requests

app = Flask(__name__)

@app.route("/proxy")
def proxy():
    url = request.args.get("url")
    if not url:
        return "Missing ?url=", 400

    # Forward request to the target URL
    try:
        r = requests.get(url, headers={
            "User-Agent": "Mozilla/5.0"
        })
    except Exception as e:
        return f"Error: {e}", 500

    # Return response with CORS headers
    resp = Response(r.content, status=r.status_code)
    resp.headers["Access-Control-Allow-Origin"] = "*"
    resp.headers["Access-Control-Allow-Headers"] = "*"
    resp.headers["Access-Control-Allow-Methods"] = "*"
    resp.headers["Content-Type"] = r.headers.get("Content-Type", "text/plain")

    return resp

if __name__ == "__main__":
    app.run(port=3000, debug=True)
