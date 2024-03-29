module.exports = function(Api) {
    return {
        Model1: async (username) => (await Api()).Get("v1/stalk/instagram/model1", { username }),
        Model2: async (username) => (await Api()).Get("v1/stalk/instagram/model2", { username }),
        Model3: async (username) => (await Api()).Get("v1/stalk/instagram/model3", { username })
    }
};