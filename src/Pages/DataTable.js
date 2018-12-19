import React from "react"
import { Table, Tag } from "antd"

const { Column } = Table;
export default ({data}) => {
    return(
        <Table dataSource={data}>
              <Column
                  title="Name"
                  dataIndex="name"
                  key="name"
              />
            <Column
              title="ID number"
              dataIndex="id"
              key="id"
            />
            <Column
              title="Phone"
              dataIndex="phone"
              key="phone"
            />
            <Column
              title="Email"
              dataIndex="email"
              key="email"
            />
          {/* <Column
            title="Tags"
            dataIndex="tags"
            key="tags"
            render={tags => (
              <span>
                {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
              </span>
            )}
          /> */}
          <Column
            title="Active"
            key="active"
            dataIndex="active"
            render={(d) => <Tag color="blue" key={d}>  {d}</Tag>}
          />
        </Table>
    )
}
