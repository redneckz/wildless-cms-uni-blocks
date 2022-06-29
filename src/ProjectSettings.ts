export interface ProjectSettings {
  TEST_BRANCH?: string;
  RC_BRANCH?: string;
  PROD_BRANCH: string;
  FORCED_DRAFT_FLOW: boolean;
  ENABLE_ASSIST?: boolean;
  SITEMAP?: string;
  CDN?: string; // Should ends with "/"
}

export const projectSettings = new (class implements ProjectSettings {
  _: ProjectSettings = {
    PROD_BRANCH: 'master',
    FORCED_DRAFT_FLOW: false,
  };

  setup(_: ProjectSettings) {
    this._ = _;
  }

  get TEST_BRANCH() {
    return this._.TEST_BRANCH;
  }
  get RC_BRANCH() {
    return this._.RC_BRANCH;
  }
  get PROD_BRANCH() {
    return this._.PROD_BRANCH;
  }
  get FORCED_DRAFT_FLOW() {
    return this._.FORCED_DRAFT_FLOW;
  }
  get ENABLE_ASSIST() {
    return this._.ENABLE_ASSIST;
  }
  get SITEMAP() {
    return this._.SITEMAP;
  }
  get CDN() {
    return this._.CDN;
  }
})();
