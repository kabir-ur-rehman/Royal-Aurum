import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { useEffect } from "react";

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { order } = location.state || {};

  // Redirect if page opened directly
  useEffect(() => {
    if (!order) navigate("/");
  }, [order, navigate]);

  if (!order) return null;

  // 🖨️ PDF Download Function
  const handleDownloadPDF = async () => {
    const receipt = document.getElementById("receipt");
    if (!receipt) return;

    const canvas = await html2canvas(receipt);
    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4",
    });

    const pageWidth = pdf.internal.pageSize.getWidth();
    const imageHeight = (canvas.height * pageWidth) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, pageWidth, imageHeight);
    pdf.save(`${order.id}_receipt.pdf`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-10 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-green-600 mb-3">Order Confirmed 🎉</h1>
        <p className="text-gray-600 mb-8">Thank you for shopping with <b>Luxora</b>!</p>

        {/* 🧾 Order Receipt Section */}
        <div
          id="receipt"
          className="bg-white shadow-md rounded-lg p-8 w-full max-w-2xl text-left border"
        >
          <h2 className="text-2xl font-semibold mb-4">Order Receipt</h2>
          <p><strong>Order Number:</strong> {order.id}</p>
          <p><strong>Date:</strong> {new Date(order.date).toLocaleString()}</p>
          <p>
            <strong>Payment Method:</strong>{" "}
            {order.paymentMethod === "cod" ? "Cash on Delivery" : "Card Payment"}
          </p>
          <p><strong>Status:</strong> {order.status}</p>

          <hr className="my-4" />

          <h3 className="font-bold text-lg mb-2">Delivery Information:</h3>
          <p><strong>Name:</strong> {order.deliveryInfo.fullName}</p>
          <p><strong>Email:</strong> {order.deliveryInfo.email}</p>
          <p><strong>Phone:</strong> {order.deliveryInfo.phone}</p>
          <p><strong>City:</strong> {order.deliveryInfo.city}</p>
          <p><strong>Address:</strong> {order.deliveryInfo.address}</p>

          <hr className="my-4" />

          <h3 className="font-bold text-lg mb-2">Ordered Items:</h3>
          <ul className="text-sm space-y-2">
            {order.items.map((item: any) => (
              <li
                key={item.id}
                className="flex justify-between border-b pb-1 last:border-0"
              >
                <span>{item.name} × {item.quantity}</span>
                <span>${(item.price * item.quantity).toLocaleString()}</span>
              </li>
            ))}
          </ul>

          <div className="border-t mt-4 pt-3 flex justify-between text-lg font-semibold">
            <span>Total:</span>
            <span className="text-primary">${order.total.toLocaleString()}</span>
          </div>
        </div>

        {/* 🖨️ Buttons */}
        <div className="flex gap-4 mt-8">
          <Button onClick={handleDownloadPDF} className="bg-blue-600 hover:bg-blue-700">
            Download Receipt (PDF)
          </Button>
          <Button onClick={() => window.print()} className="bg-gray-700 hover:bg-gray-800">
            Print Receipt
          </Button>
          <Button onClick={() => navigate("/")} variant="outline">
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
