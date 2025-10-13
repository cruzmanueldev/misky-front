"use client";

import { Modal, Input, Table, Button, Row, Col } from "antd";
import { useState } from "react";
import { useCartStore } from "@/store/cartStore";
import es from "react-phone-number-input/locale/es.json";
import dynamic from "next/dynamic";
import 'react-phone-number-input/style.css';


const PhoneInput = dynamic(() => import("react-phone-number-input"), {
  ssr: false,
});

export default function ConfirmOrder({ open, onClose, showSucces }) {

  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  const items = useCartStore((state) => state.items);
  const clearCart = useCartStore((state) => state.clear);
  const setOpenCart = useCartStore((state) => state.setOpenCart);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const dataSource = items.map((item, index) => ({
    key: index,
    name: `${item.product.name} x${item.quantity}`,
    price: parseFloat(item.product.price),
    subtotal: parseFloat(item.product.price) * item.quantity,
  }));

  const total = dataSource.reduce((acc, item) => acc + item.subtotal, 0);

  const columns = [
    { 
      title: "Producto", 
      dataIndex: "name", 
      key: "name",
      render: (name) => <div className="text-start">{name}</div> 
    },
    {
      title: "Precio",
      dataIndex: "price",
      key: "price",
      render: (price) => `${price.toFixed(2)}`,
    },
    {
      title: "Subtotal",
      dataIndex: "subtotal",
      key: "subtotal",
      render: (subtotal) =>  `${subtotal.toFixed(2)}`,
    },
  ];

  const isInvalid = !name.trim() || !phone;

  const handleConfirm = async () => {
    const order = {
      customer: { name, phone },
      items: items.map((i) => ({
        product_id: i.product.id,
        quantity: i.quantity,
      })),
      total,
    };

    try {

      const response = await fetch(`${baseUrl}/sales`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(order),
      });

      if (!response.ok) {
        throw new Error(`Error en la API: ${response.status}`);
      }

      setName('');
      setPhone('');
      clearCart();
      onClose();
      setOpenCart()
      showSucces();
    } catch (error) {
      console.error("Error enviando orden:", error);
    }
  };

  return (
    <Modal
      title="Confirmar Compra"
      open={open}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancelar
        </Button>,
        <Button 
          key="confirm" 
          type="primary" 
          onClick={handleConfirm}
          disabled={isInvalid}
        >
          Confirmar Compra
        </Button>,
      ]}
      className="modal-confirm"
      width={700}
    >
      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={false}
        summary={() => (
          <Table.Summary.Row>
            <Table.Summary.Cell index={0} colSpan={1}>
              Total
            </Table.Summary.Cell>
            <Table.Summary.Cell className="text-end" index={1} colSpan={2}>{total.toFixed(2)} €</Table.Summary.Cell>
          </Table.Summary.Row>
        )}
      />
      <div className="mb-4 mt-6">
        <p className="!mb-1">Nombres y apellidos:</p>
        <Row gutter={[12, 12]}>
          <Col xs={24} md={12}>
            <Input
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mb-2"
            />
          </Col>
          <Col xs={24} md={12} className="flex items-center">
            <PhoneInput
              placeholder="Ingresa tu número"
              value={phone}
              onChange={setPhone}
              defaultCountry="ES"
              international
              withCountryCallingCode
              labels={es}
            />
          </Col>
        </Row>
      </div>
    </Modal>
  );
}
