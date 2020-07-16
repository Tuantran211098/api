var initialState = [
    {
        id:1,
        name:'Cheat day inspirations',
        image:'https://massageishealthy.com/wp-content/uploads/2019/06/hinh-anh-do-an-hinh-anh-mon-an-thuc-an-ngon-dep-viet-nam-the-gioi-1.jpg',
        price:'55.000',
        status:true,
        description:'Bún Chả Nha trang'
    },
    {
        id:2,
        name:'Cheat day inspirations 1',
        image:'https://massageishealthy.com/wp-content/uploads/2019/06/hinh-anh-do-an-hinh-anh-mon-an-thuc-an-ngon-dep-viet-nam-the-gioi-1.jpg',
        price:'45.000',
        status:true,
        description:'Bún Chả cá'
    },
    {
        id:3,
        name:'Cheat day fish',
        image:'https://massageishealthy.com/wp-content/uploads/2019/06/hinh-anh-do-an-hinh-anh-mon-an-thuc-an-ngon-dep-viet-nam-the-gioi-1.jpg',
        price:'15.000',
        status:true,
        description:'Bún Chả cá Bình Định'
    },
    {
        id:4,
        name:'Cheat day Shrimp',
        image:'https://massageishealthy.com/wp-content/uploads/2019/06/hinh-anh-do-an-hinh-anh-mon-an-thuc-an-ngon-dep-viet-nam-the-gioi-1.jpg',
        price:'65.000',
        status:true,
        description:'Tôm bún chả'
    }
]
const ProductCarts = (state=initialState,action)=>{
    switch(action.type){
        default : return [...state]
    }
}
export default ProductCarts