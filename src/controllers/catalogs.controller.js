import Catalogs from '../models/catalogs.models.js';

export const createCatalog = async (req, res) => {
    const { name, offer } = req.body;
    const catalog = new Catalogs( { name, offer } );
    const newCatalog = await catalog.save();
    res.json(newCatalog)
}

export const getAllCatalogs = async (req, res) => {
    const catalogs = await Catalogs.find();
    res.json(catalogs)
}

export const addProductsCatalog = async (req, res) => {
    const { products, name } = req.body;
    Catalogs.findOneAndUpdate(
        { name: name }, 
        { $push: { products: products } },
        function (error, success) {
            if (error) {
                console.log(error);
            }else{
                console.log(success);
            }
        }
    );
    res.json('ok')
} 