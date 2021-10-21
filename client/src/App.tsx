import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AboutUs from './views/AboutUs';
import Appointments from './views/Appointments';
import ContactUs from './views/ContactUs';
import Merchandise from './views/Merchandise';
import NotFound from './views/NotFound';
import SellUsYourGuitars from './views/SellUsYourGuitars';
import ReverbListings from './views/ReverbListings';
import Shop from './views/Shop';
import Item from './interfaces/item';
import Login from './views/Login';
import Admin from './views/Admin';
import { useDispatch } from 'react-redux';
import { validateUser } from './api/user';
import ProductView from './views/ProductView';
import ReverbListing from './views/ReverbListing';
import { getAllItems } from './api/item';

const App = () => {
    const dispatch = useDispatch();

    const testInventory: Item[] = [
        {
            _id: '1',
            id:1,
            title: 'Epiphone SG 2018 in Heritage Cherry',
            make: 'Epiphone',
            model: 'SG',
            year: '2018',
            price: {
                amount: '1000.00',
                currency: 'USD',
                amount_cents: 100000,
                symbol: '$',
                display: '$1,000.00',
            },
            description: 'hello desc',
            photos: [
                {
                    _links: {
                        small_crop: {
                            href: 'https://images.reverb.com/image/upload/s--Yn4tpQPl--/c_crop,h_0.825,w_0.825,x_0.090,y_0.140/t_card-square/v1575655642/hn3qmg91ox3or43bgqro.jpg'
                        },
                    },
                }
            ],
            
        },
    ];

    const [inventory, setInventory] = React.useState<Item[]>(testInventory);

    useEffect(() => {

        getAllItems().then(res => {
            if(res.status === 200) {
                setInventory(res.data);
            }else{
                console.error({res});
            }
        })
        .catch(err => {
            console.error(err);
        });

        validateUser()
            .then((res:any) => {
                // console.log(res.data);
                if (res.status === 200 && res.data?.email) {
                    dispatch({
                        type: 'SET_USER',
                        payload: { email: res.data.email, _id: res.data._id },
                    });
                }
            })
            .catch((err) => {
                console.log(err);
            });

        //eslint-disable-next-line
    }, []);

    

    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Shop inventory={inventory} />
                </Route>
                <Route path='/login'>
                    <Login />
                </Route>
                <Route path='/admin'>
                    <Admin />
                </Route>
                <Route path='/sell-us-your-guitars'>
                    <SellUsYourGuitars />
                </Route>
                <Route path='/appointments'>
                    <Appointments />
                </Route>
                <Route path='/contact'>
                    <ContactUs />
                </Route>
                <Route path='/about-us'>
                    <AboutUs />
                </Route>
                <Route path='/reverb-listings'>
                    <ReverbListings />
                </Route>

                <Route path='/merchandise'>
                    <Merchandise inventory={inventory} />
                </Route>
                <Route path='/product/:id'>
                    <ProductView />
                </Route>
                <Route path='/reverb-product/:id'>
                    <ReverbListing />
                </Route>
                <Route path='*'>
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
