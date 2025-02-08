import { configureStore, createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name:'products',
    initialState:{
        veg:[{name:"tomato",price:100.08,image:"/veg/tomato.jpg"},
            {name:"beetroot",price:100.08,image:"/veg/beetroot.jpg"},
            {name:"cabbage",price:100.08,image:"/veg/cabbage1.jpg"},
            {name:"garlic",price:100.08,image:"/veg/garlic.jpg"},
            {name:"mirchi",price:100.08,image:"/veg/chilli.jpg"},
            {name:"onion",price:100.08,image:"/veg/onion1.jpg"},
            {name:"peppers",price:100.08,image:"/veg/pepper1.jpg"},
            {name:"potato",price:100.08,image:"/veg/potato.jpg"},
            {name:"pumpkin",price:100.08,image:"/veg/pumpkin.jpg"},
            {name:"brinjal",price:100.08,image:"/veg/brinjal.jpg"},
            {name:"ladiesfinger",price:100.08,image:"/veg/ladiesfinger.jpg"},
            {name:"cucumber",price:100.08,image:"/veg/cucumber.jpg"}, 
        ],
        nonveg:[{name:"mutton",price:200.08,image:"/nonveg/mutton1.jpg"},
            {name:"chicken",price:200.08,image:"/nonveg/chicken.jpg"},
            {name:"fish",price:200.08,image:"/nonveg/fish.jpg"},
            {name:"prawn",price:200.08,image:"/nonveg/prawn.jpg"},
            {name:"crab",price:200.08,image:"/nonveg/crab.jpg"},
            {name:"cuck",price:200.08,image:"/nonveg/cuck.jpg"},
            {name:"labstar",price:200.08,image:"/nonveg/labstar.jpg"},
            {name:"sausage",price:200.08,image:"/nonveg/sausage.jpg"},
            {name:"squid",price:200.08,image:"/nonveg/squid.jpg"},
            {name:"turkey",price:200.08,image:"/nonveg/turkey.jpg"},
            {name:"fish",price:200.08,image:"/nonveg/fish.jpg"},
            {name:"fish",price:200.08,image:"/nonveg/fish.jpg"},
            
            
        ]},
        reducers:{}
})
// create cart
const cartslice = createSlice({
    name:'cart',
    initialState:[],
    reducers: {
        addToCart:
            (state,action)=>{
                const item = state.find((item)=>item.name === action.payload.name);
                if(item){
                    item.quantity +=1;
                }else{
                    state.push({...action.payload,quantity:1});
                }    
            },
        increment:
            (state,action)=>{
               const item = state.find((item)=>item.name === action.payload.name );
               if(item){
                    item.quantity +=1;
               }
            },
        decrement:
            (state,action)=>{
               const item = state.find((item)=>item.name === action.payload.name);
               if(item && item.quantity>1){
                item.quantity -=1;
               }else{
                return state.filter((item)=>item.name !== action.payload.name);
               }
            },
        remove:
            (state,action)=>{
               return state.filter((item)=>item.name !== action.payload.name);
            },
        clearcart:
            () =>{
                return [];
            }
            
    }
    
})

// create Purches Details 
    const cartpurchesdDetails = createSlice({
        name:'purchesDetails',
        initialState:[],
        reducers:{
            addPurcheDetails:(state,action)=>{
                state.push(action.payload);
            }
        }
    })


// creat login slice 
    const authSlice = createSlice({
        name:"auth",
        initialState:{
            isAuthenicated:localStorage.getItem("username") ? true : false ,   // Check if username exists in localStorage
            user : localStorage.getItem("username") || null  // If exists, set username, otherwise null
        
        },
        reducers : {
            login:
             (state,action)=>{
                state.isAuthenicated = true;
                state.user = action.payload;
                localStorage.setItem("username",action.payload) //store in local storage
            },
            logout:
                (state)=>{
                    state.isAuthenicated = false;
                    state.user = " ";
                    localStorage.removeItem("username");  // clear form the local storage 
                }

        }
    })


//configure the store x

const Store = configureStore({
    reducer:{products:productSlice.reducer, // syntex anu koo reducer:{name: variableName.reducer}
            cart:cartslice.reducer ,
            purchesDetails:cartpurchesdDetails.reducer,
            auth:authSlice.reducer}  // add cart!
    
})



export const {addToCart,increment,decrement,remove,clearcart} = cartslice.actions;
export const {addPurcheDetails} = cartpurchesdDetails.actions;
export const {login ,logout} = authSlice.actions;
export default Store;