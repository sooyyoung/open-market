import API from "../../../api/api";
import { Button } from "./SellerProductList.style";

export default function SellerProductList({ item }) {
    const deleteProduct = async (e) => {
        const productId = e.target.id;
        if (!window.confirm("상품을 삭제하시겠습니까?")) return
        try {
            const res = await API.delete(`/products/${productId}`, {
                headers: {
                    Authorization: window.localStorage.getItem("token")
                },
            });
            alert("상품이 삭제되었습니다.");
        } catch (error) {
            console.error(error);
        }
    }
     
    return (
        <tr>
            <td className="product">
                <img src={item.image} alt={item.product_name} />
                <div>
                    <p>{item.product_name}</p>
                    <span>재고: {item.stock}개</span>
                </div>
            </td>
            <td>{item.price}원</td>
            <td>
                <Button modify>수정</Button>
            </td>
            <td>
                <Button 
                    onClick={deleteProduct} 
                    id={item.product_id} 
                    delete
                >삭제</Button>
            </td>
        </tr>
    )
}