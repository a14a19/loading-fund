import { useState } from "react"

const INTERESTS = [
  {
    id: 1,
    name: "investment",
  },
  {
    id: 2,
    name: "pitch",
  },
  {
    id: 3,
    name: "conference",
  },
  {
    id: 4,
    name: "press",
  },
]

const Contact = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    interest: "investment",
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(form)
    setForm({
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      interest: "investment",
      message: "",
    })
  }

  return (
    <>
      <div className="h-auto w-full bg-white px-10">
        {/* border top */}
        <div className="border-b border-dashed border-black h-20" />
        {/* heading section */}
        <section className="flex justify-between gap-4 flex-col text-4xl sm:text-5xl md:flex-row lg:text-6xl xl:text-8xl mt-6">
          <h1 className="text-[#FA4C14]" style={{ fontFamily: "DotGothic16" }}>
            06
          </h1>
          <h1 className="text-black mr-auto md:ml-16 lg:ml-32 font-bold uppercase">
            Contact<sup>##</sup>
          </h1>
          <div className="w-0 h-0 md:w-12 md:h-12 xl:w-20 xl:h-20">
            <svg
              viewBox="0 0 62 62"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M61 1v60H1V1h60Z"
                stroke="#FA4C14"
                strokeMiterlimit="10"
              ></path>
              <path
                d="M43.3 38H23.8V18.5"
                stroke="#FA4C14"
                strokeMiterlimit="10"
              ></path>
              <path d="M23.9 38 60.6 1.3" stroke="#FA4C14"></path>
            </svg>
          </div>
        </section>

        {/* Form section */}
        <section className="text-black grid place-items-center sm:place-items-end mt-24">
          <div className="w-full sm:w-4/5 h-auto border-t border-dashed border-black flex flex-col-reverse gap-20 md:gap-0 md:flex-row justify-between pt-10 pb-20 lg:pb-32">
            {/* Form */}
            <form
              onSubmit={handleSubmit}
              className="w-full md:w-3/5 flex flex-col gap-4"
            >
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="firstName"
                  className="uppercase text-sm md:text-xs max-md:scale-y-110 font-medium text-gray-800"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  required
                  autoComplete="off"
                  autoFocus
                  spellCheck="false"
                  onChange={handleChange}
                  value={form.firstName}
                  className="bg-white border border-black rounded-sm w-full h-12 md:h-10 lg:h-14 uppercase text-lg lg:text-xl xl:text-2xl pl-2 font-medium cursor-pointer outline-none"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="lastName"
                  className="uppercase text-sm md:text-xs max-md:scale-y-110 font-medium text-gray-800"
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  required
                  autoComplete="off"
                  spellCheck="false"
                  onChange={handleChange}
                  value={form.lastName}
                  className="bg-white border border-black rounded-sm w-full h-12 md:h-10 lg:h-14 uppercase text-lg lg:text-xl xl:text-2xl pl-2 font-medium cursor-pointer outline-none"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="email"
                  className="uppercase text-sm md:text-xs max-md:scale-y-110 font-medium text-gray-800"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  spellCheck="false"
                  autoComplete="off"
                  onChange={handleChange}
                  value={form.email}
                  className="bg-white border border-black rounded-sm w-full h-12 md:h-10 lg:h-14 text-lg lg:text-xl xl:text-2xl pl-2 font-medium cursor-pointer outline-none"
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="company"
                  className="uppercase text-sm md:text-xs max-md:scale-y-110 font-medium text-gray-800"
                >
                  Company *
                </label>
                <input
                  type="text"
                  id="company"
                  required
                  spellCheck="false"
                  autoComplete="off"
                  onChange={handleChange}
                  value={form.company}
                  className="bg-white border border-black rounded-sm w-full h-12 md:h-10 lg:h-14 uppercase text-lg lg:text-xl xl:text-2xl pl-2 font-medium cursor-pointer outline-none"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="message"
                  className="uppercase text-sm md:text-xs max-md:scale-y-110 font-medium text-gray-800"
                >
                  select topic of interest *
                </label>
                <div className="grid grid-cols-2 text-center text-base md:text-xl lg:text-2xl gap-2">
                  {INTERESTS.map((ele) => (
                    <div
                      key={ele.id}
                      onClick={() => setForm({ ...form, interest: ele.name })}
                      className={`uppercase border border-black rounded-sm py-2 font-medium cursor-pointer  hover:duration-500 ${
                        form.interest === ele.name
                          ? "bg-[#FA4C14]"
                          : "hover:bg-gray-800 hover:text-white"
                      }`}
                    >
                      {ele.name}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="message"
                  className="uppercase text-sm md:text-xs max-md:scale-y-110 font-medium text-gray-800"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  autoComplete="off"
                  onChange={handleChange}
                  value={form.message}
                  rows={8}
                  className="bg-white border border-black rounded-sm w-full text-lg lg:text-xl xl:text-2xl pl-2 font-medium cursor-pointer outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn uppercase w-full hover:bg-[#FA4C14] hover:duration-500 corner-border md:text-2xl font-extralight"
              >
                submit
              </button>
            </form>
            <h2 className="text-md w-full md:w-2/5 text-black md:pl-20 lg:pl-32 md:text-[12px] xl:text-lg xl:leading-8 text-base leading-normal md:leading-loose">
              <span className="bg-black border-white border text-white p-1 md:p-2 uppercase">
                connect
              </span>
              <br />
              <br />
              We're eager to hear about your ventures. And we can't wait to
              discover how your aspirations fit into this dynamic landscape.
            </h2>
          </div>
        </section>
      </div>

      <div className="texts overflow-hidden w-full bg-white pb-28 text-[#FA4C14] text-4xl lg:text-6xl xl:text-8xl flex flex-row gap-4 font-medium uppercase">
        <div className="text-slide flex items-center space-x-8 ">
          <h1>
            Technology, global from the start, &nbsp;
            <span style={{ fontFamily: "DotGothic16" }}>
              is culture in action
            </span>
          </h1>
        </div>
        <div className="text-slide flex items-center space-x-8">
          <h1>
            Technology, global from the start,&nbsp;
            <span style={{ fontFamily: "DotGothic16" }}>
              is culture in action
            </span>
          </h1>
        </div>
      </div>
    </>
  )
}

export default Contact
