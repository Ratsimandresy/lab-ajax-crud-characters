class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    return this.service.get("/");
  }

  getOneRegister() {
    return this.service.get("/" + id);
  }

  createOneRegister() {
    return this.service.post("/create" + id, data);
  }

  updateOneRegister() {
    return this.servcie.pacth("/" + id, data);
  }

  deleteOneRegister() {
    return this.service.delete("/" + id, data);
  }
}

export default APIHandler;
