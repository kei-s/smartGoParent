describe("GetParent", function(){
  it("should get parent of anchor", function() {
    let url =                     "http://www.example.com/path/to/file.txt?query=value#anchor";
    expect(getParent(url,1)).toBe("http://www.example.com/path/to/file.txt?query=value");
  });
  it("should get parent of parameter", function() {
    let url =                     "http://www.example.com/path/to/file.txt?query=value";
    expect(getParent(url,1)).toBe("http://www.example.com/path/to/file.txt");
  });
  it("should get parent of path", function() {
    let url =                     "http://www.example.com/path/to/file.txt";
    expect(getParent(url,1)).toBe("http://www.example.com/path/to/");
  });
  it("should get parent of sub-domain", function() {
    let url =                     "http://www.example.com/";
    expect(getParent(url,1)).toBe("http://example.com/");
  });
  it("should not get top level domain", function() {
    let url =                     "http://example.com/";
    expect(getParent(url,1)).toBe("http://example.com/");
  });
  describe("has count greater than 1",function() {
    it("should get parent by count", function() {
      let url =                     "http://www.example.com/path/to/file.txt?query=value#anchor";
      expect(getParent(url,3)).toBe("http://www.example.com/path/to/");
    });
  });
  describe("when url has IP Address", function() {
    it("should not get incorrect address", function() {
      let url =                     "http://127.0.0.1/path/";
      expect(getParent(url,2)).toBe("http://127.0.0.1/");
    });
  });
  describe("when url has Port Number", function() {
    it("should get parent of sub-domain with same port", function() {
      let url =                     "http://www.example.com:80/";
      expect(getParent(url,2)).toBe("http://example.com:80/");
    });
    it("should not get incorrect address with same port", function() {
      let url =                     "http://127.0.0.1:80/";
      expect(getParent(url,2)).toBe("http://127.0.0.1:80/");
    });
  });
  describe("when url has file:/// protocol", function() {
    describe("like Linux", function() {
      it("should get parent of path", function() {
        let url =                     "file:///Users/me/my/directory/";
        expect(getParent(url,1)).toBe("file:///Users/me/my/");
      });
      it("should not get parent of top path", function() {
        let url =                     "file:///Users/";
        expect(getParent(url,1)).toBe("file:///Users/");
      });
    });
    describe("like Windows", function() {
      it("should get parent of path", function() {
        let url =                     "file:///C:/Users/me/";
        expect(getParent(url,1)).toBe("file:///C:/Users/");
      });
      it("should not get paren of top path", function() {
        let url =                     "file:///C:/";
        expect(getParent(url,1)).toBe("file:///C:/");
      });
    });
  });
});
