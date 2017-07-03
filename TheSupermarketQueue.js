function queueTime(customers, n) {
 if (customers.length === 0)
      return 0;
    let lanes = [];
    for (let i = 0; i < n; i++)
      lanes.push(0);
    while (customers.length > 0)
    {
        let cust = lanes.indexOf(Math.min.apply(null, lanes));
        lanes[cust] += customers.shift();
    }
    return Math.max.apply(null, lanes);
}