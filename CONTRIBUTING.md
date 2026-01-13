# Contributing to business-card-jl

Thank you for considering contributing to business-card-jl! Contributions of any size are welcome — bug reports, feature requests, documentation improvements, tests, and code changes all help.

## Code of conduct
Please follow a respectful, inclusive, and constructive tone. If you don't have a CODE_OF_CONDUCT.md in this repository, consider adding one; until then, follow common open-source community norms.

## Filing issues
- Use issues to report bugs, request features, or ask questions.
- When opening an issue, include:
  - A clear and descriptive title
  - Steps to reproduce (for bugs)
  - Expected vs actual behavior
  - Julia version and OS information
  - Minimal reproducible example when possible

## Submitting changes (pull requests)
1. Fork the repository and create a branch named `fix/short-description` or `feat/short-description`.
2. Make your changes in the branch; keep changes focused and small.
3. Update or add tests for any bugfixes or features.
4. Run the test suite locally before submitting a PR:

```sh
# from the repository root
julia --project -e "using Pkg; Pkg.instantiate(); Pkg.test(coverage=false)"
```

5. (Optional) Format code using JuliaFormatter if you use it in your workflow.

6. Commit changes with a clear message. For example:

```
feat: add X to improve Y
fix: correct Z when ...
docs: update README
```

7. Push your branch to your fork and open a pull request against `main` in this repository. In the PR description, explain what you changed and why, link to any related issues, and include screenshots or examples if helpful.

## Branching and commits
- Use descriptive branch names and small, focused commits.
- Prefer squash or rebase merges if requested by maintainers to keep history clean.

## Tests and CI
- Add tests for new behavior or to reproduce bugs.
- The project uses GitHub Actions (if set up) — ensure your PR passes CI checks.

## Review process
- Maintainers will review PRs and may request changes. Please respond to review comments and update your branch.
- Don't be discouraged by requested changes; they help ensure quality and consistency.

## Need help?
If you're unsure where to start, check the open issues for tasks labeled "good first issue" or create a new issue describing what you'd like to work on.

## License
Your contributions will be made under the same license as the project. By contributing, you agree to the project's license.

Thanks again — we appreciate your help!
