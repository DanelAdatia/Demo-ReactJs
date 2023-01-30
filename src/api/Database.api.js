import axios from "axios";

const headers = {
  masterdetailId: `6b623f64-ed4c-46fb-88f0-ce700aa6fcb1`,
  openStoreId: `9fc7e05f-eb24-4846-b728-08d1d340e37b`,
};

const ReactEndPoint = "https://bizonapi.sufalam.live/api";

export const GetListingAndPagination = async () => {
  return await axios.get(
    `${ReactEndPoint}/products?filter[include]=productbrand&filter[include]=productmedia&filter[include]=category&filter[where][productstatus]=1&filter[skip]=0&filter[limit]=5`,
    {
      headers,
    }
  );
};

export const PriceHighToLow = async () =>
  await axios.get(
    `${ReactEndPoint}/products?filter[include]=productbrand&filter[include]=productmedia&filter[include]=category&filter[where][productstatus]=1&filter[order][0]=price%20DESC&filter[skip]=0&filter[limit]=20`,
    {
      headers,
    }
  );
export const PriceLowToHigh = async () =>
  await axios.get(
    `${ReactEndPoint}/products?filter[include]=productbrand&filter[include]=productmedia&filter[include]=category&filter[where][productstatus]=1&filter[order][0]=price%20ASC&filter[skip]=0&filter[limit]=20`,
    {
      headers,
    }
  );
export const BestSelling = async () =>
  await axios.get(
    `${ReactEndPoint}/products?filter[include]=productbrand&filter[include]=productmedia&filter[include]=category&filter[where][productstatus]=1&filter[order][0]=sellcounter%20DESC&filter[skip]=0&filter[limit]=20`,
    {
      headers,
    }
  );
export const UsingName = async () =>
  await axios.get(
    `${ReactEndPoint}/products?filter[include]=productbrand&filter[include]=productmedia&filter[include]=category&filter[where][productstatus]=1&filter[where][name][like]=%M%&filter[skip]=0&filter[limit]=20`,
    {
      headers,
    }
  );

export const UsingPrice = async () =>
  await axios.get(
    `${ReactEndPoint}/products?filter[include]=productbrand&filter[include]=productmedia&filter[include]=category&filter[where][productstatus]=1&filter[where][minPrice]=10&filter[where][maxPrice]=100000&filter[skip]=0&filter[limit]=20`,
    {
      headers,
    }
  );
