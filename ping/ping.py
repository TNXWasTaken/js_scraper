import requests
import sys

def main():
  res = requests.get("https://" + sys.argv[1])
  print(res.text)
  print(res.status_code)

if __name__ == "__main__":
  main()