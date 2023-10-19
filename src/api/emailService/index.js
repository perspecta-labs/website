export const onSubmit = async (formData) => {
    console.log(formData);
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    }).then((res) => res.json());

    console.log("Result: ", res);
    if (res.success) {
      console.log("Success", res);
    } else {
      console.log("Error", res);
    }
};