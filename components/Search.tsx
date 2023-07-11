"use client"
import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Search = () => {
    const [searchParam, setSearchParam] = useState('');
    const router = useRouter();

    return (
        <div className="w-full">
            <div className="my-6 px-4 sm:px-6 lg:px-8">
                <label htmlFor="searchParam" className="block text-xl font-medium leading-6 text-white">
                    Layerswap Transaction Explorer
                </label>
                <div className="relative mt-2 flex items-center pl-2 bg-secondary-700 rounded-md">
                    <input
                        type="text"
                        name="searchParam"
                        id="searchParam"
                        value={searchParam}
                        onChange={(v) => setSearchParam(v.target.value)}
                        placeholder="Search by Address / Deposit Address / Source Tx / Destination Tx "
                        className="block w-full rounded-md py-1 pl-3 pr-14 border-2 border-transparent placeholder:text-base placeholder:leading-3 focus:border-secondary-500 duration-200 transition-all outline-none text-white bg-secondary-700 shadow-sm placeholder:text-primary-text "
                    />
                    <div className="flex p-2">
                        <button onClick={() => router.push(`/${searchParam}`)} className="inline-flex items-center rounded-lg bg-primary-500 shadow-lg p-2 hover:bg-primary-700 hover:text-primary-text active:scale-90 duration-200 transition-all font-sans text-xs text-white">
                            <SearchIcon className="h-5 w-5" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Search;