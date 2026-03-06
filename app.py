from Flask import flask

app = Flask(__name__)

@spp.route("/")
def home():
  return "erraco japa rodando"

if __name__ == "__main__":
  app.run()
