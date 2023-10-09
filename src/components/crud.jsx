import PreviousMap from "postcss/lib/previous-map";
import React from "react";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { BiSolidEditAlt } from "react-icons/bi";

const Crud = () => {
  const [formData, setFormData] = useState([
    {
      fname: "",
      lname: "",
      email: "",
      city: "",
      cnic: "",
      dob: "",
      gender: "",
      course: "",
    },
  ]);
  const [allEntry, setAllEntry] = useState([]);
  const [count, setcount] = useState(0);
  const [webcount, setwebcount] = useState(0);
  const [countDesighner, setCountDesighner] = useState(0);
  const [countSeo, setCountSeo] = useState(0);
  const [search, setSearch] = useState(null);

  const handleDelete = (index) => {
    const updateItems = [...allEntry];
    updateItems.splice(index, 1);
    setAllEntry(updateItems);
    console.log(index);
    if (allEntry.course === "Web Development") {
      setwebcount(webcount - 1);
    } else if (allEntry.course == "UI / UX") {
      setCountDesighner(countDesighner - 1);
    } else if (allEntry.course === "SEO") {
      setCountSeo(countSeo - 1);
    }
    setcount(count - 1);
  };

  return (
    <>
      <div
        className={`lg:w-[40%] md:w-[60%] left-0 right-0 w-[98%] grid my-[3rem] shadow-lg mx-auto border border-yellow-400 `}
      >
        <form
          action=""
          onSubmit={(e) => {
            if (
              !formData.fname &&
              !formData.email &&
              !formData.lname &&
              !formData.city &&
              !formData.gender &&
              !formData.course &&
              !formData.cnic
            ) {
              alert("please fill all the information ");
            }
            if (formData.course === "Web Development") {
              setwebcount(webcount + 1);
            } else if (formData.course == "UI/UX") {
              setCountDesighner(countDesighner + 1);
            } else if (formData.course == "SEO") {
              setCountSeo(countSeo + 1);
            }
            e.preventDefault();
            setAllEntry((Previousdata) => [...Previousdata, formData]);
            console.log(allEntry);
            setcount(count + 1);

            setFormData({
              fname: "",
              lname: "",
              email: "",
              city: "",
              cnic: "",
              dob: "",
              gender: "",
              course: "",
            });
          }}
        >
          <div>
            <h2 className="text-[22px] text-gray-700 font-bold text-center">
              Register Here
            </h2>
          </div>
          <div className=" py-4 px-6 mx-auto h-auto grid grid-cols-2 gap-4 ">
            <div>
              <label className="mx-2 text-base font-bold text-gray-700 my-1 block ">
                FirstName
              </label>
              <input
                className="shadow border rounded-lg px-2 py-2 w-full text-gray-700 leading-tight focus-outline-none border-blue-300  dark:focus:ring-blue-500 focus-shadow-outline appearance-none focus:border-blue-500 dark:focus:border-blue-600"
                type="text"
                placeholder="FirstName..."
                name="fname"
                value={formData.fname}
                onChange={(e) => {
                  setFormData({ ...formData, fname: e.target.value });
                }}
              />
            </div>
            <div>
              <label className="mx-2 text-base font-bold text-gray-700 my-1 block">
                LastName
              </label>
              <input
                className="shadow border rounded-lg px-2 py-2 w-full text-gray-700 leading-tight border-blue-300 focus:border-blue-700"
                type="text"
                placeholder="LastName..."
                name="lname"
                value={formData.lname}
                onChange={(e) => {
                  setFormData({ ...formData, lname: e.target.value });
                }}
              />
            </div>
            <div>
              <label className="mx-2 text-base font-bold text-gray-700 my-1 block">
                Email
              </label>
              <input
                className="shadow rounded-lg border px-2 py-3 w-full text-gray-700 leading-tight border-blue-300 focus:border-blue-700"
                type="text"
                placeholder="enter Email..."
                name="email"
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                }}
              />
            </div>
            <div>
              <label className="mx-3 text-base font-bold text-gray-700 my-1 block">
                City
              </label>
              <input
                className="shadow rounded-lg px-2 py-2 border w-full text-gray-700 leading-tight border-blue-300 focus:border-blue-700"
                type="text"
                placeholder="enter City..."
                name="city"
                value={formData.city}
                onChange={(e) => {
                  setFormData({ ...formData, city: e.target.value });
                }}
              />
            </div>
            <div>
              <label className="text-base font-bold text-gray-700 my-1 mx-2 block">
                CNIC
              </label>
              <input
                className="shadow rounded-lg px-2 py-2 w-full text-gray-700 leading-tight border border-blue-300 focus:border-blue-700"
                type="Number"
                placeholder="71104-1779917-1 "
                name="cnic"
                value={formData.cnic}
                onChange={(e) => {
                  setFormData({ ...formData, cnic: e.target.value });
                }}
              />
            </div>
            <div>
              <label className="block text-gray-700 my-1 mx-2 text-base font-bold">
                Date Of Birth
              </label>
              <input
                className="shadow rounded-lg px-3 py-2 w-full block border border-blue-300"
                type="date"
                name="dob"
                value={formData.dob}
                onChange={(e) => {
                  setFormData({ ...formData, dob: e.target.value });
                }}
              />
            </div>
            <div>
              <label className="text-base font-bold text-gray-700 mx-2 my-1 block">
                Gender
              </label>
              <select
                name="gender"
                id="gender"
                className="text-gray-700 border border-blue-300 w-full py-2 px-2"
                value={formData.gender}
                onChange={(e) => {
                  setFormData({ ...formData, gender: e.target.value });
                }}
              >
                {" "}
                Gender
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Others">others</option>
              </select>
            </div>
            <div>
              <label className="text-gray-700 text-base font-bold block my-1 mx-2">
                Select Course
              </label>
              <select
                name="course"
                id="course"
                className="text-gray-700 w-full shadow border border-blue-300 py-2 px-3"
                value={formData.course}
                onChange={(e) => {
                  setFormData({ ...formData, course: e.target.value });
                }}
              >
                <option value="Web Development"> Web Development</option>
                <option value="UI/UX">UI / UX</option>
                <option value="SEO">SEO</option>
              </select>
            </div>
          </div>
          <div className="text-center my-4">
            <button className="border border-blue-400 bg-blue-700 text-white transtion-all px-5 py-2 my-3 rounded-lg hover:cursor-pointer hover:bg-blue-500">
              {" "}
              submit{" "}
            </button>
          </div>
        </form>
      </div>
      {/* count the students  */}
      <div className="w-[70%] mx-auto  grid grid-cols-4 my-[2rem]">
        <div className=" border border-green-500 bg-green-700 text-white">
          <h2 className="text-[20px] ml-1  font-bold py-14 px-4">
            {" "}
            total Students :{count}
          </h2>
        </div>
        <div className=" border border-red-500 bg-red-600 px-4 text-white">
          <h2 className="text-[20px] ml-1 mt-10 font-bold">
            {" "}
            Web Development: {webcount}
          </h2>{" "}
        </div>
        <div className=" border border-yellow-500 bg-yellow-600 text-white px-4">
          <h2 className="text-[20px] ml-1 mt-10 font-bold">
            {" "}
            UI / UX :{" "}
            <span className="ml-3 text-[23px]"> {countDesighner} </span>
          </h2>
        </div>
        <div className=" border border-blue-500 bg-blue-700 text-white px-4">
          <h2 className="text-[20px] ml-1 mt-10 font-bold">
            {" "}
            SEO : <span className="text-[23px] ml-2"> {countSeo}</span>
          </h2>
        </div>
      </div>
      <div className="w-[70%] mx-auto space-x-3 my-3 text-center">
        <button
          className="border-2 text-white py-2 px-6 bg-yellow-500 rounded-xl hover:bg-white hover:border-2 hover:border-yellow-500 hover:text-yellow-500 transition-all ease-in-out delay-150 mx-5 text-[20px] font-semibold"
          onClick={() => setSearch(allEntry)}
        >
          ALL
        </button>
        <button
          className="border-2 text-white py-2 px-6 bg-yellow-500 rounded-xl hover:bg-white hover:border-2 hover:border-yellow-500 hover:text-yellow-500 transition-all ease-in-out delay-150 mx-5 text-[20px] font-semibold"
          onClick={() =>
            setSearch(
              allEntry.filter((items, index) => {
                return (
                  <div key={index}> {items.course === "Web Development"}</div>
                );
              })
            )
          }
        >
          {console.log(search)} Web Development
        </button>
        <button
          className="border-2 text-white py-2 px-6 bg-yellow-500 rounded-xl hover:bg-white hover:border-2 hover:border-yellow-500 hover:text-yellow-500 transition-all ease-in-out delay-150 mx-5 text-[20px] font-semibold"
          onClick={() =>
            setSearch(
              allEntry.filter((items, index) => {
                return (
                  <div key={index}>
                    {items.course.toLowerCase() === "ui/ux"}
                  </div>
                );
              })
            )
          }
        >
          UI / UX
        </button>
        <button
          className="border-2 text-white py-2 px-6 bg-yellow-500 rounded-xl hover:bg-white hover:border-2 hover:border-yellow-500 hover:text-yellow-500 transition-all ease-in-out delay-150 mx-5 text-[20px] font-semibold"
          onClick={() =>
            setSearch(
              allEntry.filter((items) => {
                return <div> {items.course === "SEO"}</div>;
              })
            )
          }
        >
          SEO
        </button>
      </div>
      <div>
        <ul className="grid grid-cols-8 w-[80%] mx-auto place-items-center gap-x-4 border border-gray-700 py-4">
          <li className="text-[20px] font-bold text-gray-700">Name</li>
          <li className="text-[20px] font-bold text-gray-700">Email</li>
          <li className="text-[20px] font-bold text-gray-700">Password</li>
          <li className="text-[20px] font-bold text-gray-700">City</li>
          <li className="text-[20px] font-bold text-gray-700">CNIC</li>
          <li className="text-[20px] font-bold text-gray-700">DOB</li>
          <li className="text-[20px] font-bold text-gray-700">Gender</li>
          <li className="text-[20px] font-bold text-gray-700">Course</li>
        </ul>
      </div>
      {/* data start here */}

      {search ? (
        <div className="w-[80%] mx-auto">
          {search.map((items, index) => {
            return (
              <>
                <div key={index}>
                  <ul className="grid grid-cols-8 gap-x-4 gap-y-4 border border-green-400  place-items-center">
                    <li className="text-base font-bold text-gray-700 mt-4  ">
                      {items.fname}
                    </li>
                    <li className="text-base font-bold text-gray-700 mt-4  ">
                      {items.lname}
                    </li>
                    <li className="text-base font-bold text-gray-700 mt-4  ">
                      {items.email}
                    </li>
                    <li className="text-base font-bold text-gray-700 mt-4  ">
                      {items.city}
                    </li>
                    <li className="text-base font-bold text-gray-700 mt-4  ">
                      {items.cnic}
                    </li>
                    <li className="text-base font-bold text-gray-700 mt-4  ">
                      {items.dob}
                    </li>
                    <li className="text-base font-bold text-gray-700 mt-4  ">
                      {items.gender}
                    </li>
                    <li className="text-base font-bold text-gray-700 mt-4  ">
                      {items.course}
                    </li>
                    <li className="text-[20px]  text-red-500 mt-4 ">
                      <span className="grid grid-cols-2">
                        <i className="cursor-pointer">
                          {" "}
                          {<MdDelete onClick={() => handleDelete(index)} />}
                        </i>

                        <i className="text-blue-700 cursor-pointer">
                          {" "}
                          <BiSolidEditAlt />
                        </i>
                      </span>
                    </li>
                  </ul>
                </div>
              </>
            );
          })}
        </div>
      ) : (
        <div className="w-[80%] mx-auto">
          {allEntry.map((items, index) => {
            return (
              <>
                <div key={index}>
                  <ul className="grid grid-cols-8 gap-x-4 gap-y-4 border border-green-400  place-items-center">
                    <li className="text-base font-bold text-gray-700 mt-4  ">
                      {items.fname}
                    </li>
                    <li className="text-base font-bold text-gray-700 mt-4  ">
                      {items.lname}
                    </li>
                    <li className="text-base font-bold text-gray-700 mt-4  ">
                      {items.email}
                    </li>
                    <li className="text-base font-bold text-gray-700 mt-4  ">
                      {items.city}
                    </li>
                    <li className="text-base font-bold text-gray-700 mt-4  ">
                      {items.cnic}
                    </li>
                    <li className="text-base font-bold text-gray-700 mt-4  ">
                      {items.dob}
                    </li>
                    <li className="text-base font-bold text-gray-700 mt-4  ">
                      {items.gender}
                    </li>
                    <li className="text-base font-bold text-gray-700 mt-4  ">
                      {items.course}
                    </li>
                    <li className="text-[20px]  text-red-500 mt-4 ">
                      <span className="grid grid-cols-2">
                        <i className="cursor-pointer">
                          {" "}
                          {<MdDelete onClick={() => handleDelete(index)} />}
                        </i>

                        <i className="text-blue-700 cursor-pointer">
                          {" "}
                          <BiSolidEditAlt />
                        </i>
                      </span>
                    </li>
                  </ul>
                </div>
              </>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Crud;
