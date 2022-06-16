import { Avatar, Popover, TableProps, Tooltip } from "antd";
import { AntDesignOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Space, Table } from "antd";
import type {
    ColumnsType,
    FilterValue,
    SorterResult,
} from "antd/lib/table/interface";
import { Fragment, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { GetAllProject } from "../../redux/Slice/ProjectSlice";
import { AllProject } from "../../Type/Project";
import parse, { domToReact } from "html-react-parser";
type Props = {};
export default function Profile({ }: Props) {
    const dispatch = useAppDispatch();
    const { AllProject } = useAppSelector((state) => state.ProjectAll);
    // console.log(AllProject);
    //table ant
    const [filteredInfo, setFilteredInfo] = useState<
        Record<string, FilterValue | null>
    >({});
    const [sortedInfo, setSortedInfo] = useState<SorterResult<AllProject>>({});
    const handleChange: TableProps<AllProject>["onChange"] = (
        pagination,
        filters,
        sorter
    ) => {
        setFilteredInfo(filters);
        setSortedInfo(sorter as SorterResult<AllProject>);
    };
    const clearAll = () => {
        setFilteredInfo({});
        setSortedInfo({});
    };
    const handlePaser = (text: string) => {
        const options: any = {
            replace: ({ attribs, children }: { attribs: any, children: any }) => {
                console.log('a',children?.children)
            }
        };
        parse(text,options);
    }
    if (AllProject.length > 1) {
        (handlePaser(AllProject[1].description))
    }
    const content = (
        <div>
            <p>Content</p>
            <p>Content</p>
        </div>
    );
    const columns: ColumnsType<AllProject> = [
        {
            title: "id",
            dataIndex: "id",
            key: "id",
            sorter: (a, b) => a.id - b.id,
            width: "15%",
        },
        {
            title: "projectName",
            dataIndex: "projectName",
            key: "projectName",
            sorter: (a, b) => a.projectName.length - b.projectName.length,
            width: "30%",
        },
        {
            title: "description",
            dataIndex: "description",
            key: "description",
            render: (text, record, index) =>
            (
                <div key={index}>{parse(text)}</div>),
            width: "30%",
        },
        {
            title: "members",
            dataIndex: "members",
            key: "members",
            render: (text, re, index) => (
                <Popover key={index} content={content} title="Title">
                    {/* <div>
                        <Avatar src="https://joeschmoe.io/api/v1/random" />
                        <Avatar style={{ backgroundColor: '#f56a00' }}>K</Avatar>
                        <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} />
                    </div> */}
                    {re.members?.map((re, index) => {
                        return <>
                            <Avatar src={re.avatar} />
                        </>
                    })}





                </Popover>
            ),
            width: "15%",
        },
        {
            title: "Action",
            dataIndex: "Action",
            key: "Action",
            width: "10%",
        },
    ];
    const data: AllProject[] = AllProject;
    useEffect(() => {
        dispatch(GetAllProject());
    }, []);
    return (
        <>
            <Space style={{ marginBottom: 16 }}>
                <Button onClick={clearAll}>Clear filters and sorters</Button>
            </Space>
            <Table
                size="small"
                columns={columns}
                dataSource={data}
                onChange={handleChange}
                rowKey='id'
                scroll={{ x: 1600 }}
            />
        </>
    );
}
