import { POST } from ".";

const transactions = async (payload) => {
  try {
    const res = await POST(
      "transaction-manager/v1/admin/dashboard/search",
      payload
    );
    console.log(res, "dashboard");

    return res;
  } catch (error) {
    console.log(error);
  }
};

export { transactions };
