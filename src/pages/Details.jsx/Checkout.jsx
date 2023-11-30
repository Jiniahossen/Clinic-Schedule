import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";

const Chekout = ({ discountedAmount, handleBook, dataId }) => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();

    const [paymenterror, setPaymentError] = useState('');
    const stripe = useStripe();
    const element = useElements();
    const [clientSecret, setClientSecret] = useState();

    const price=discountedAmount;
    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-api', { price: price })
                .then((res) => {
                    // console.log(res.data.clientSecret);
                    setClientSecret(res.data.clientSecret)
                })
        }

    }, [axiosSecure,price])

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        if (!stripe || !element) {
            return;
        }

        const card = element.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setPaymentError(error.message);
        } else {
            // Handle success case if needed
            console.log(paymentMethod);
            setPaymentError('');
        }



        //confirm card payment 

        const { paymentIntent, error:confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',
                },
            },
        });

        if (confirmError) {
            console.log('Confirm error', confirmError);
        } else {
            console.log('payment:', paymentIntent);
            if (paymentIntent.status === 'succeeded') {
                // Handle successful payment
                // Swal.fire('Payment succeesfull');
                const paymentInfo = {
                    transectionId: paymentIntent.id,
                    email: user.email,
                    price: totalPrice,
                    date: new Date(),
                    cartId: cart.map(item => item._id),
                    menuId: cart.map(item => item.menuID),
                    status: 'pending'
                }

                const res = await axiosSecure.post('/payments', paymentInfo);
                refetch();
                if (res.data.insertedId) {
                    Swal.fire('Payment succeesfull');
                }
            }
        }
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <CardElement className="mx-auto"
                    options={
                        {
                            stripe: {
                                base: {
                                    fontSize: '16px',
                                    color: '#424770',
                                    '::placeholder': {
                                        color: '#aab7c4',
                                    },
                                },
                                invalid: {
                                    color: '#9e2146',
                                },
                            }
                        }
                    }
                >
                </CardElement>
                <div className=" max-w-2xl mx-auto pt-10">
                </div>
                <h1 className=" text-sm font-serif text-red-600">{paymenterror}</h1>
            </form>
        </div>
    );
};

export default Chekout;