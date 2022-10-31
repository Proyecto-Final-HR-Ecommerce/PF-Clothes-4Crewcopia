import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react'
import { useParams } from 'react-router-dom';
import { clearDetail, getProductDetail } from '../../redux/actions';
import Navbar from '../navbar/navbar';
import { Fragment, useState } from 'react'
import { Dialog, RadioGroup, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/20/solid'


function ProductDetail(product) {
    const dispatch = useDispatch();
    // const { productId } = useParams();
    // const product = useSelector((state) => state.details)
    const openDetail = useSelector((state) => state.openDetail)
    const [open, setOpen] = useState(false)
    // const [selectedColor, setSelectedColor] = useState(product.colors[0])
    const [selectedSize, setSelectedSize] = useState({ size: "M", stock: true })
    const slider = useRef()

    // React.useEffect(() => {
    //     if (open === true) {
    //         dispatch(getProductDetail(p.id));
    //     }

    //     return () => {
    //         dispatch(clearDetail());
    //     }
    // }, [dispatch, p.id])

    React.useEffect(() => {
        product.size?.map((s) => {
            (s.stock > 1) ? s.stock = true : s.stock = false
        })
        if (product.size.length) {
            product.size[0].size = 'XS'
            product.size[1].size = 'S'
            product.size[2].size = 'M'
            product.size[3].size = 'L'
            product.size[4].size = 'XL'
            product.size[5].size = 'XXL'
            product.size[0].stock = true
            product.size[1].stock = true
            product.size[2].stock = true
            product.size[3].stock = true
            product.size[4].stock = true
            product.size[5].stock = true
        }
        if (openDetail === product.id) {
            setOpen(true)
        }

    }, [product, openDetail])

    console.log('En detail product', product.size)
    // ----------------------------------------------------------------
    //const product = {name: 'Basic Tee 6-Pack ',
    //   price: '$192',////////////////////
    //   rating: 3.9,/////////////////
    //   reviewCount: 117,//////////////////////
    //   href: '#',  NO ESTÁ???????----------------------
    //   imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg',///////
    //   imageAlt: 'Two each of gray, white, and black shirts arranged on table.',///////
    //   colors: [    ARREGLAR QUE SE VEA UNO SOLO--------------------------------
    //     { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    //     { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    //     { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
    //   ],
    //   sizes: [///////////////////////////////////////////////
    //     { name: 'XXS', inStock: true },
    //     { name: 'XS', inStock: true },
    //     { name: 'S', inStock: true },
    //     { name: 'M', inStock: true },
    //     { name: 'L', inStock: true },
    //     { name: 'XL', inStock: true },
    //     { name: 'XXL', inStock: true },
    //     { name: 'XXXL', inStock: false },
    //   ],
    // }


    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }


    return (
        (product.name ?
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                                enterTo="opacity-100 translate-y-0 md:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 md:scale-100"
                                leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
                            >
                                <Dialog.Panel className="flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl">
                                    <div className="relative flex w-full items-center overflow-hidden bg-white px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                                        <button
                                            type="button"
                                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                                            onClick={() => setOpen(false)}
                                        >
                                            <span className="sr-only">Close</span>
                                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                        </button>

                                        <div className="grid w-full grid-cols-1 items-start gap-y-8 gap-x-6 sm:grid-cols-12 lg:gap-x-8">
                                            <div className="aspect-w-2 aspect-h-3 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5">
                                                {/* poner carrusel con mapeo de imagenes */}
                                                {/* <img src={product.image[0]} alt='imagen producto' className="object-scale-down object-center" /> */}
                                                <div className='flex items-center justify-center w-full h-full'>
                                                    <button className='h-3 w-3' onClick={() => slider.current.scrollLeft -= 200}>
                                                        <img src='/flecha1.png' alt="flecha1" />
                                                    </button>
                                                    <div ref={slider} className='snap-x overflow-scroll scroll-smooth h-full flex items-center justify-start text-center'>

                                                        {product.image?.map((e) => {
                                                            return (
                                                                <img src={e} alt='imagen producto' className="object-scale-down object-center" />
                                                            )
                                                        })}
                                                    </div>
                                                    < button className='h-3 w-3' onClick={() => slider.current.scrollLeft += 200}>
                                                        <img src='/flecha2.png' alt="flecha2" />
                                                    </button>
                                                </div>



                                            </div>
                                            <div className="sm:col-span-8 lg:col-span-7">
                                                <h2 className="text-2xl font-bold text-gray-900 sm:pr-12">{product.name}</h2>
                                                <p className="text-sm text-gray-900 sm:pr-12">{product.description}</p>
                                                <section aria-labelledby="information-heading" className="mt-2">
                                                    <h3 id="information-heading" className="sr-only">
                                                        Product information
                                                    </h3>

                                                    <p className="text-2xl text-gray-900">U$S {product.price}</p>

                                                    {/* Reviews */}
                                                    {/* <div className="mt-6">
                                                                <h4 className="sr-only">Reviews</h4>
                                                                <div className="flex items-center">
                                                                    <div className="flex items-center">
                                                                        {[0, 1, 2, 3, 4].map((rating) => (
                                                                            <StarIcon
                                                                                key={rating}
                                                                                className={classNames(
                                                                                    product.rating > rating ? 'text-gray-900' : 'text-gray-200',
                                                                                    'h-5 w-5 flex-shrink-0'
                                                                                )}
                                                                                aria-hidden="true"
                                                                            />
                                                                        ))}
                                                                    </div>
                                                                    <p className="sr-only">{product.rating} out of 5 stars</p>
                                                                    <a href="#" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                                                        {product.reviewCount} reviews
                                                                    </a>
                                                                </div>
                                                            </div> */}
                                                </section>

                                                <section aria-labelledby="options-heading" className="mt-10">
                                                    <h3 id="options-heading" className="sr-only">
                                                        Product options
                                                    </h3>

                                                    <form>
                                                        {/* Colors */}
                                                        {/* <div>
                                                                    <h4 className="text-sm font-medium text-gray-900">Color</h4>

                                                                    <RadioGroup value={selectedColor} onChange={setSelectedColor} className="mt-4">
                                                                        <RadioGroup.Label className="sr-only"> Choose a color </RadioGroup.Label>
                                                                        <span className="flex items-center space-x-3">
                                                                            {product.colors.map((color) => (
                                                                                <RadioGroup.Option
                                                                                    key={color.name}
                                                                                    value={color}
                                                                                    className={({ active, checked }) =>
                                                                                        classNames(
                                                                                            color.selectedClass,
                                                                                            active && checked ? 'ring ring-offset-1' : '',
                                                                                            !active && checked ? 'ring-2' : '',
                                                                                            '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none'
                                                                                        )
                                                                                    }
                                                                                >
                                                                                    <RadioGroup.Label as="span" className="sr-only">
                                                                                        {' '}
                                                                                        {color.name}{' '}
                                                                                    </RadioGroup.Label>
                                                                                    <span
                                                                                        aria-hidden="true"
                                                                                        className={classNames(
                                                                                            color.class,
                                                                                            'h-8 w-8 border border-black border-opacity-10 rounded-full'
                                                                                        )}
                                                                                    />
                                                                                </RadioGroup.Option>
                                                                            ))}
                                                                        </span>
                                                                    </RadioGroup>
                                                                </div> */}

                                                        {/* Sizes */}
                                                        <div className="mt-10">
                                                            <div className="flex items-center justify-between">
                                                                <h4 className="text-sm font-medium text-gray-900">Sizes</h4>
                                                                {/* <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                                                    Size guide
                                                                </a> */}
                                                            </div>

                                                            <RadioGroup value={selectedSize} onChange={setSelectedSize} className="mt-4">
                                                                <RadioGroup.Label className="sr-only"> Choose a size </RadioGroup.Label>
                                                                <div className="grid grid-cols-4 gap-4">
                                                                    {product.size?.map((s) => (

                                                                        < RadioGroup.Option

                                                                            key={s.size}
                                                                            value={s}
                                                                            disabled={!s.stock}
                                                                            className={({ active }) =>
                                                                                classNames(
                                                                                    s.stock
                                                                                        ? 'bg-white shadow-sm text-gray-900 cursor-pointer'
                                                                                        : 'bg-gray-50 text-gray-200 cursor-not-allowed',
                                                                                    active ? 'ring-2 ring-indigo-500' : '',
                                                                                    'group relative border rounded-md py-3 px-4 flex items-center justify-center text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1'
                                                                                )
                                                                            }
                                                                        >
                                                                            {({ active, checked }) => (
                                                                                <>
                                                                                    <RadioGroup.Label as="span">{s.size}</RadioGroup.Label>
                                                                                    {s.stock ? (
                                                                                        <span
                                                                                            className={classNames(
                                                                                                active ? 'border' : 'border-2',
                                                                                                checked ? 'border-indigo-500' : 'border-transparent',
                                                                                                'pointer-events-none absolute -inset-px rounded-md'
                                                                                            )}
                                                                                            aria-hidden="true"
                                                                                        />
                                                                                    ) : (
                                                                                        <span
                                                                                            aria-hidden="true"
                                                                                            className="pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200"
                                                                                        >
                                                                                            <svg
                                                                                                className="absolute inset-0 h-full w-full stroke-2 text-gray-200"
                                                                                                viewBox="0 0 100 100"
                                                                                                preserveAspectRatio="none"
                                                                                                stroke="currentColor"
                                                                                            >
                                                                                                <line x1={0} y1={100} x2={100} y2={0} vectorEffect="non-scaling-stroke" />
                                                                                            </svg>
                                                                                        </span>
                                                                                    )}
                                                                                </>
                                                                            )}
                                                                        </RadioGroup.Option>
                                                                    ))}
                                                                </div>
                                                            </RadioGroup>
                                                        </div>

                                                        <button
                                                            type="submit"
                                                            className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                                        >
                                                            Add to bag
                                                        </button>
                                                    </form>
                                                </section>
                                            </div>
                                        </div>

                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog >
            </Transition.Root >
            :
            console.log('no hay nada')
        )
    )
}


export default ProductDetail;

