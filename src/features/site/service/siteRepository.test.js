import { SiteRepository } from "./siteRepository";

const mockSite = {
    id: "1",
    name: "site name",
};
const newMockSite = {
    id: "2",
    name: "new site name",
};

describe("Given SiteRepository Service", () => {
    const error = new Error("Error");
    let service = new SiteRepository();

    describe("When it has been run getAll and it has called getAll", () => {
        test(`Then if I use service.getAll() 
            it should return a Promise of site`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockSite),
            });
            await service.getAll();
            expect(fetch).toHaveBeenCalled();
        });
        test(`Then if I use service.getAll() 
            it should return an error`, async () => {
            global.fetch = jest.fn().mockRejectedValue({
                ok: false,
                status: 404,
                statusText: "Error",
            });
            await service.getAll();
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });
    describe("When it has been run get and it has called get", () => {
        test(`Then if I use service.get() 
            it should return a Promise of site`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockSite),
            });
            const result = await service.get(mockSite.id);
            expect(fetch).toHaveBeenCalled();
            expect(result).toBe(mockSite);
        });
        test(`Then if I use service.get() 
            it should return an error`, async () => {
            global.fetch = jest.fn().mockRejectedValue({
                ok: false,
                status: 404,
                statusText: "Error",
            });
            await service.get(mockSite.id);
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });
    describe("When it has been run delete and it has called delete", () => {
        test(`Then if I use service.delete() 
            it should return a Promise of site`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockSite),
            });
            const result = await service.delete(mockSite.id);
            expect(fetch).toHaveBeenCalled();
            expect(result).toBe(mockSite);
        });
        test(`Then if I use service.delete() 
            it should return an error`, async () => {
            global.fetch = jest.fn().mockRejectedValue({
                ok: false,
                status: 404,
                statusText: "Error",
            });
            await service.delete(mockSite.id);
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });
    describe("When it has been run post and it has called post", () => {
        test(`Then if I use service.post() 
            it should return a Promise of site`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(mockSite),
            });
            const result = await service.post(mockSite);
            expect(fetch).toHaveBeenCalled();
            expect(result).toBe(mockSite);
        });
        test(`Then if I use service.post() 
            it should return an error`, async () => {
            global.fetch = jest.fn().mockRejectedValue({
                ok: false,
                status: 404,
                statusText: "Error",
            });
            await service.post(mockSite);
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });
    describe("When it has been run put and it has called put", () => {
        test(`Then if I use service.put() 
            it should return a Promise of site`, async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: true,
                json: jest.fn().mockResolvedValue(newMockSite),
            });
            const result = await service.put(mockSite.id, {
                price: newMockSite.price,
            });
            expect(fetch).toHaveBeenCalled();
            expect(result).toBe(newMockSite);
        });
        test(`Then if I use service.put() 
            it should return an error`, async () => {
            global.fetch = jest.fn().mockRejectedValue({
                ok: false,
                status: 404,
                statusText: "Error",
            });
            await service.put(mockSite.id, {
                price: 55,
            });
            expect(fetch).toHaveBeenCalled();
            expect(error).toBeInstanceOf(Error);
        });
    });

    describe("When we instantiate it", () => {
        test("Then if i use service.createError(), it should return an error", () => {
            const error = service.createError(
                new Response("Error", {
                    status: 400,
                    statusText: "error",
                })
            );

            const result = new Error("Error 400: error");
            result.name = "HTTPError";
            expect(error).toEqual(result);
        });
    });
});
