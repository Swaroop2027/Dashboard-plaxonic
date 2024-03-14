import React from 'react'

const Pages = () => {
  return (
    <div className="bg-gray-300 w-[50%] border border-solid border-gray-300 my-24 rounded-md">
    <div className="p-4">
      <p className="text-xl">Page Data</p>
    </div>
    <hr />

    <div className="">
      <div>
        <ul className="flex justify-evenly py-3 font-semibold">
          <li>Purchase Date</li>
          <li>Item ID</li>
          <li>Item Name</li>
          <li>In Stock</li>
          <li>Quantity</li>
        </ul>
        <hr />
      </div>

      <div>
        <ul className="flex justify-evenly py-3 gap-4">
          <li>May 18, 2020</li>
          <li>123</li>
          <li>Milk</li>
          <li>40</li>
          <li>38</li>
        </ul>
        <hr />
      </div>

      <div>
        <ul className="flex justify-evenly py-3 gap-4">
          <li>April 22, 2018</li>
          <li>234</li>
          <li>Banana</li>
          <li>20</li>
          <li>25</li>
        </ul>
        <hr />
      </div>

      <div>
        <ul className="flex justify-evenly py-3 gap-4">
          <li>April 15, 2021</li>
          <li>782</li>
          <li>Chocolate</li>
          <li>45</li>
          <li>40</li>
        </ul>
        <hr />
      </div>

      <div>
        <ul className="flex justify-evenly py-3 gap-6">
          <li>October 15, 2023</li>
          <li>536</li>
          <li>Cake</li>
          <li>33</li>
          <li>28</li>
        </ul>
        <hr />
      </div>
    </div>
  </div>
  )
}

export default Pages
