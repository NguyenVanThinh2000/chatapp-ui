import { SearchOutlined } from "@ant-design/icons";

import "./style.scss";

export interface IProfileProps {}

export default function Profile(props: IProfileProps) {
    return (
        <div className="userProfile">
            <form action="">
                <div className="field">
                    <input
                        type="text"
                        placeholder="Search"
                        className="inputSearch"
                    />
                    <SearchOutlined className="icon" />
                </div>
            </form>
        </div>
    );
}
