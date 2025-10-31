function checkout() {
    let items = document.querySelectorAll('.item input');
    let order = [];
    let total = 0;

    items.forEach(item => {
        let quantity = item.value;
        if (quantity > 0) {
            let name = item.getAttribute('data-name');
            let price = item.getAttribute('data-price');
            total += quantity * price;
            order.push(`${quantity} x ${name}`);
        }
    });

    if (order.length > 0) {
        let orderText = `Hola, quisiera realizar el siguiente pedido:\n\n${order.join('\n')}\n\nTotal: $${total.toFixed(2)}\n\nPago en efectivo y con delivery propio.`;
        let whatsappUrl = `https://wa.me/2615778812?text=${encodeURIComponent(orderText)}`;
        window.open(whatsappUrl, '_blank');
    } else {
        alert('No ha seleccionado ningún item.');
    }
}
