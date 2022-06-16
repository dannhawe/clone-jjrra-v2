import React from "react";
import { useAppSelector } from "../../../redux/hooks";
import { HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
type Props = {};

export default function HeaderDashBoard({ }: Props) {
    const { user } = useAppSelector((state) => state.LoginReducer);
    return (
        <div
            style={{
                boxShadow:
                    "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
            }}
        >
            <nav className=" flex justify-between  p-6">
                <Link to={"/profile"} className="cursor-pointer">
                    <HomeOutlined style={{ fontSize: "30px", color: "orange" }} />
                </Link>
                <div className="flex justify-end items-center">
                    <p className="text-xl mx-3 my-0 font-bold font-sans uppercase text-gray-500">
                        HELLO <span className="text-orange-400"> {user.name}!</span>
                    </p>
                    <img
                        src={user.avatar}
                        className="rounded-full w-10 h-10 cursor-pointer"
                        alt="avatar"
                    />
                </div>
            </nav>
        </div>
    );
}
