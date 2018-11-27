class Github {
    constructor() {
        this.client_id = "826c20ae16236148d961";
        this.client_secret = "b55ccf0febcddd675c0a994857a2b403b6c6cad0";
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
     }

     async getUser(user) {
         const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

            const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
         
         
        const profile = await profileResponse.json();
         const repos = await repoResponse.json();

         return {
          profile,
          repos
         }
     }
}