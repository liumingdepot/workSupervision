/**
 * 公共函数
 */
import api from '../http/api'
export default {
    //处理菜单树
    tree(arr) {
        function main(arr, pid, superior = '') {
            const temp = [];
            for (let item of arr) {
                if (item.parentId == pid) {
                    item.superior = superior
                    let children = main(arr, item.id, item.name);
                    if (children.length > 0) {
                        item.children = children
                    }
                    temp.push(item);
                }
            }
            return temp;
        }

        return main(arr, 0)
    },
    city(arr) {
        function main(arr, pid) {
            const temp = [];
            for (let item of arr) {
                if (item.TopID == pid) {
                    item.value = item.label = item.AddName
                    let children = main(arr, item.ID)
                    if (children.length > 0) {
                        item.children = children
                    }
                    temp.push(item);
                }
            }
            return temp;
        }

        return main(arr, 0)
    },
    getId(data) {
        const arr = [];

        function app(data) {
            data.forEach(val => {
                arr.push(val.id)
                if (val.children && val.children.length > 0) {
                    app(val.children)
                }
            })
        }

        app(data)
        return arr
    },
    //处理菜单树
    company(arr) {
        function main(arr, pid) {
            const temp = [];
            for (let item of arr) {
                if (item.parentId == pid) {
                    item.label = item.name
                    let children = main(arr, item.id);
                    if (children.length > 0) {
                        item.children = children
                    }
                    temp.push(item);
                }
            }
            return temp;
        }

        return main(arr, 0)
    },
    async findDictByCode(code){
        const {data} = await api.dict.findDictByCode({code})
        const arr =  data.dictVos.map(val=>val.name)
        return arr
    }
}
