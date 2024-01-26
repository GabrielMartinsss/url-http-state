# URL & HTTP state
Small project developed to learn and apply the concept of HTTP state and URL state using tanstack/react-query

* URL state: used in the search filter.
* HTTP state: used in create a new product.

Using HTTP state and URL state compared to the Context API in the context of a React application has its own pros. Here are some points to consider:

#### Pros:
<table>
  <thead>
    <tr>
      <td>HTTP State</td>
      <td>URL State</td>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        1. Data Persistence: <br>
        - HTTP state is typically associated with managing data retrieved from an API. This allows data to persist between different
         components, maintaining a single source of truth for the application state.
      </td>
      <td>
        1. Sharing State between Components: <br>
        - URL state is useful for sharing specific information between components, even when they are not directly related. This can be 
          beneficial in scenarios where prop drilling would be inconvenient.
      </td>
    </tr>
    <tr>
      <td>
        2. Facillitates API Communication: <br>
        - HTTP state, when used with libraries like React Query, makes communicating with an API easier by providing an 
        abstraction layer and simplifying CRUD operations.
      </td>
      <td>
        2. Bookmarking and Navigation History: <br>
        - By using URL state, users can bookmark and share specific application URLs. Additionally, the 
        browser's navigation history works natively, facilitating navigation to previous states.
      </td>
    </tr>
    <tr>
      <td>
        3. Automatic Updates: <br>
        - Libraries like React Query can automate data updates, ensuring that 
        components are automatically updated when the underlying data changes.
      </td>
      <td>
        3. Easier Integration with Route Parameters: <br>
        - It is easier to integrate route parameters with URL state, allowing components to react 
        dynamically to changes in the URL.
      </td>
    </tr>
    <tr>
      <td></td>
      <td>
        4. Data Persistence even after a page refresh: <br>
        - By storing its parameters in the URL, offers the advantage of persistence even after a
        page refresh, while the Context API does not maintain its state after a page reload.
      </td>
    </tr>
  </tbody>
</table>

#### Cons:
<table>
  <thead>
    <tr>
      <td>HTTP State</td>
      <td>URL State</td>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>
        1. Management Complexity: <br>
        - Managing state through HTTP requests can become complex, especially in large applications. Dealing with error cases, loading states, caching, among other considerations, adds to the complexity.
      </td>
      <td>
        1. Complexity of URL: <br>
        - If there are many parameters in the URL, it can become complex and hard to read. This may impact the usability and aesthetics of the application.
      </td>
    </tr>
    <tr>
      <td>
        2. Overfetching or Underfetching: <br>
        - Overfetching (retrieving more data than necessary) or underfetching (retrieving insufficient data) can occur when fetching information from the API. This can negatively impact performance.
      </td>
      <td>
        2. Security: <br>
        - Sensitive information should not be included in the URL as it is visible and can be shared. Make sure not to include confidential data in the URL state.
      </td>
    </tr>
  </tbody>
</table>