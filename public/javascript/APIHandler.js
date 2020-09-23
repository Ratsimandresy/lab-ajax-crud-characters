class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
    this.service = axios.create({
      baseURL: baseUrl,
    });
  }

  getFullList() {
    return this.service.get("/");
  }

  getOneRegister(id) {

    return this.service.get("/" + `${id}`);
  }

  createOneRegister(id, data) {
    return this.service.post("/create" + `${id}`, data);
  }

  updateOneRegister(id, data) {
    return this.servcie.pacth("/" + `${id}`, data);
  }

  deleteOneRegister(id, data) {
    return this.service.delete("/" + `${id}`, data);
  }
}

export default APIHandler;
